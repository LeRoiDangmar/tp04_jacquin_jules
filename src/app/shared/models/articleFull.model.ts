import { articlePreview } from "./articlePreview.model";

export interface articleFull extends articlePreview{
    poids: number;
    description: string;
    dimension: string;
}