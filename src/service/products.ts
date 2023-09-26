import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export default async function getProducts(): Promise<Product[]> {
    // 파일을 읽어오기 위한 경로, 현재경로, 가져올 경로
    // SSG 통신
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((product) => product.id === id);
}
