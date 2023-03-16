import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({
      products: products,
      table: table,
    });

    res.json(order).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
} 