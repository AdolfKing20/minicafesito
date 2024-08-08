"use server"
import { redirect } from "next/navigation";
import MercadoPagoConfig, { Preference } from "mercadopago";

export async function donate(formData: FormData) {
    const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "donacion",
            title: formData.get("mensaje") as string,
            quantity: 1,
            unit_price: Number(formData.get("monto")),
          },
        ],
      },
    });
    redirect(preference.sandbox_init_point!);
}