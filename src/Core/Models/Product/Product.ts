import { ProductStatus } from "@/Core/Utils/Product";

export class Product {
    id: number = 0;
    name: string = '';
    status: ProductStatus = ProductStatus.ON_SALE;
    price: number = 0;
    oldPrice: number = 0;
    image: string = '';;
    image2: string = '';;
    description: string = '';;
}