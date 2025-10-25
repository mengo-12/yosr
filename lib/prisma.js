// import { PrismaClient, Decimal  } from "@prisma/client";

// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// export default prisma;


// الكود الاعلى اصلي

// الكود الجديد خاص بالعزل middleware

// import { PrismaClient } from "@prisma/client";
// import fs from "fs";
// import path from "path";

// const prisma = new PrismaClient();

// // ✅ تحميل إعداد الفندق المحلي
// let propertyConfig = null;
// try {
//     const configPath = path.resolve(process.cwd(), "config/propertyConfig.json");
//     propertyConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
// } catch {
//     console.warn("⚠️ No propertyConfig.json found, running in cloud/global mode.");
// }

// const currentPropertyId = propertyConfig?.propertyId || null;
// const currentMode = propertyConfig?.mode || "local"; // الوضع الافتراضي محلي

// // ✅ الموديلات التي تحتوي على propertyId
// const modelsWithProperty = [
//     "Booking", "Room", "RoomType", "RatePlan", "RateRule", "RatePlanOccupancy",
//     "RatePlanPolicy", "RatePlanExtra", "Inventory", "Charge", "Folio", "Extra",
//     "Guest", "Company", "User", "HousekeepingTask", "POSCharge", "POSItem",
//     "POSSale", "POSSaleItem", "GuestPreference", "LoyaltyProgram",
//     "LoyaltyMember", "LoyaltyTransaction", "Payment", "PaymentMethod", "RoomBlock"
// ];

// // ✅ Middleware لتطبيق العزل التلقائي لجميع العمليات
// if (currentMode === "local" && currentPropertyId) {
//     prisma.$use(async (params, next) => {
//         const { model, action } = params;

//         if (!modelsWithProperty.includes(model)) return next(params);

//         params.args = params.args || {};

//         // --- قراءة البيانات ---
//         if (["findMany", "findFirst"].includes(action)) {
//             params.args.where = params.args.where || {};
//             params.args.where.propertyId = currentPropertyId;
//         }

//         // --- findUnique: تحويله إلى findFirst مع شرط propertyId لتطبيق العزل ---
//         if (action === "findUnique") {
//             const uniqueKey = Object.keys(params.args.where || {})[0];
//             const value = params.args.where[uniqueKey];
//             params.action = "findFirst";
//             params.args.where = {
//                 [uniqueKey]: value,
//                 propertyId: currentPropertyId,
//             };
//         }

//         // --- إنشاء / تحديث ---
//         if (["create", "update"].includes(action)) {
//             params.args.data = params.args.data || {};
//             if (!params.args.data.propertyId) {
//                 params.args.data.propertyId = currentPropertyId;
//             }
//             // تحديث: تأكد من أن where يحتوي propertyId
//             if (action === "update") {
//                 params.args.where = params.args.where || {};
//                 params.args.where.propertyId = currentPropertyId;
//             }
//         }

//         // --- createMany ---
//         if (action === "createMany" && Array.isArray(params.args?.data)) {
//             params.args.data = params.args.data.map(item => ({
//                 ...item,
//                 propertyId: item.propertyId || currentPropertyId,
//             }));
//         }

//         // --- حذف البيانات ---
//         if (["delete", "deleteMany"].includes(action)) {
//             params.args.where = params.args.where || {};
//             params.args.where.propertyId = currentPropertyId;
//         }

//         return next(params);
//     });
// }

// export default prisma;



// النسخة الاعلى اصلية اللي تحت للتجربة فقط



// lib/prisma.js
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// load local property config
let propertyConfig = null;
try {
  const configPath = path.resolve(process.cwd(), "config/propertyConfig.json");
  propertyConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch {
  console.warn("⚠️ No propertyConfig.json found, running in cloud/global mode.");
}

const currentPropertyId = propertyConfig?.propertyId || null;
const currentMode = propertyConfig?.mode || "local"; // default local

// models that have propertyId field and should be isolated by propertyId
const modelsWithProperty = [
  "Booking","Room","RoomType","RatePlan","RateRule","RatePlanOccupancy",
  "RatePlanPolicy","RatePlanExtra","Inventory","Charge","Folio","Extra",
  "Guest","Company","User","HousekeepingTask","POSCharge","POSItem",
  "POSSale","POSSaleItem","GuestPreference","LoyaltyProgram",
  "LoyaltyMember","LoyaltyTransaction","Payment","PaymentMethod","RoomBlock"
];

if (currentMode === "local" && currentPropertyId) {
  prisma.$use(async (params, next) => {
    const { model, action } = params;
    params.args = params.args || {};

    // --- Special handling for Property model (nested includes / direct queries) ---
    // We DO NOT expect Property model to have propertyId field;
    // instead we restrict reads/updates/deletes to the currentPropertyId by matching id.
    if (model === "Property") {
      // READS
      if (["findMany", "findFirst"].includes(action)) {
        params.args.where = params.args.where || {};
        params.args.where = { AND: [ params.args.where, { id: currentPropertyId } ] };
      }

      if (action === "findUnique") {
        const where = params.args.where || {};
        const keys = Object.keys(where);
        const uniqueKey = keys[0];
        const value = where[uniqueKey];
        // convert to findFirst with id constraint
        params.action = "findFirst";
        params.args.where = { AND: [ { [uniqueKey]: value }, { id: currentPropertyId } ] };
      }

      // UPDATES / DELETES - restrict by id = currentPropertyId
      if (["update", "updateMany"].includes(action)) {
        params.args.where = params.args.where || {};
        params.args.where = { AND: [ params.args.where, { id: currentPropertyId } ] };
        // leave params.args.data untouched for create/update content
      }

      if (["delete", "deleteMany"].includes(action)) {
        params.args.where = params.args.where || {};
        params.args.where = { AND: [ params.args.where, { id: currentPropertyId } ] };
      }

      return next(params);
    }

    // --- For other models that DO have propertyId: apply propertyId isolation ---
    if (!modelsWithProperty.includes(model)) {
      return next(params); // untouched
    }

    // READS: findMany / findFirst
    if (["findMany", "findFirst"].includes(action)) {
      params.args.where = params.args.where || {};
      params.args.where = { AND: [ params.args.where, { propertyId: currentPropertyId } ] };
    }

    // findUnique -> convert to findFirst so we can add propertyId constraint
    if (action === "findUnique") {
      const where = params.args.where || {};
      const keys = Object.keys(where);
      const uniqueKey = keys[0];
      const value = where[uniqueKey];
      params.action = "findFirst";
      params.args.where = { AND: [ { [uniqueKey]: value }, { propertyId: currentPropertyId } ] };
    }

    // CREATE / UPDATE
    if (["create", "update"].includes(action)) {
      params.args.data = params.args.data || {};
      if (!params.args.data.propertyId) {
        params.args.data.propertyId = currentPropertyId;
      }
      if (action === "update") {
        params.args.where = params.args.where || {};
        params.args.where = { AND: [ params.args.where, { propertyId: currentPropertyId } ] };
      }
    }

    // createMany
    if (action === "createMany" && Array.isArray(params.args?.data)) {
      params.args.data = params.args.data.map(item => ({
        ...item,
        propertyId: item.propertyId || currentPropertyId,
      }));
    }

    // delete / deleteMany
    if (["delete", "deleteMany"].includes(action)) {
      params.args.where = params.args.where || {};
      params.args.where = { AND: [ params.args.where, { propertyId: currentPropertyId } ] };
    }

    // NOTE:
    // We DO NOT try to mutate `include.property` here because nested queries targeting
    // Property will themselves pass through the 'model === "Property"' branch above,
    // so they will be filtered by id = currentPropertyId automatically.

    return next(params);
  });
}

export default prisma;
