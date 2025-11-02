import prisma from "@/lib/prisma"

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json()

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 })
        }

        const savedMessage = await prisma.contactMessage.create({
            data: { name, email, phone, message },
        })

        return new Response(JSON.stringify({ success: true, message: savedMessage }), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}
