export enum EItemIcon  {
    burgerIcon= "burgerIcon",
    listIcon= "burgerIcon",
    profileIcon= "burgerIcon"
}

export type IItem = {
    id: string;
    name: string;
    href: string;
    icon: EItemIcon;
    exact: boolean;
};