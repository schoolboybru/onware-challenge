
interface NaturalProduct {
    readonly licenceNo: string;
    readonly productName: string;
    readonly companyName: string;
    readonly active: boolean;
    readonly purposes: readonly string[];
    readonly routes: readonly string[];
}

export { NaturalProduct };
