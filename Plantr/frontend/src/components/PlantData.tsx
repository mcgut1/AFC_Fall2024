
export interface PlantData {
    id?:number; // this one is optional when created, but it is REQUIRED for updating
    common_name: string;
    image: string;
    sowing: string;
    row_spacing: string;
    minimum_root_depth: string;
    days_toHarvest: string;
    light: number;
    growth_rate: string;
}
