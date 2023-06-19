import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import BadRequestError from "../errors/bad-request";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response) => {
	const products = await prisma.product.findMany();
	res.status(StatusCodes.OK).json({ data: products });
};

export const getSigleProduct = (req: Request, res: Response) => {
	res.status(StatusCodes.OK).json({ product: {} });
};

// JUST TO AVOID CREATING PRODUCTS MANUALLY - TESTING PURPOSE
export const createProduct = async (req: Request, res: Response) => {
	const { name, quantity } = req.body;

	if (!name) {
		throw new BadRequestError("Please provide product name!");
	}

	const product = await prisma.product.create({ data: { name, quantity } });

	res.status(StatusCodes.OK).json({ data: product });
};
