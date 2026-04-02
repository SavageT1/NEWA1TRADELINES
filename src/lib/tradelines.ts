// White-label integration with Tradeline Masters API
// All prices are marked up 40% from vendor cost before display

const MARKUP = 1.4;

export interface Tradeline {
  id: string;
  cardType: 'Visa' | 'Mastercard' | 'Amex' | 'Discover';
  bankName: string;
  creditLimit: number;
  ageMonths: number;
  utilization: number;
  reportingDate: string;
  price: number;       // customer-facing price (vendor cost × 1.4)
  available: boolean;
}

type VendorTradeline = Omit<Tradeline, 'price'> & { vendorPrice: number };

function applyMarkup(tradelines: VendorTradeline[]): Tradeline[] {
  return tradelines.map(({ vendorPrice, ...t }) => ({
    ...t,
    price: Math.ceil((vendorPrice * MARKUP) / 5) * 5,
  }));
}

export async function getTradelines(): Promise<Tradeline[]> {
  // When Tradeline Masters API key is ready, replace mock with:
  // const res = await fetch(process.env.TRADELINE_MASTERS_API_URL!, {
  //   headers: { 'Authorization': `Bearer ${process.env.TRADELINE_MASTERS_API_KEY}` }
  // });
  // if (!res.ok) throw new Error('Failed to fetch tradelines');
  // const vendorData = await res.json();
  // return applyMarkup(vendorData);
  return applyMarkup(VENDOR_TRADELINES);
}

// Vendor cost from Tradeline Masters — customers see these × 1.4
const VENDOR_TRADELINES = [
  { id: '1',  cardType: 'Visa'       as const, bankName: 'Chase',             creditLimit: 25000, ageMonths: 84,  utilization: 4,  reportingDate: '1st',  vendorPrice: 215, available: true },
  { id: '2',  cardType: 'Amex'       as const, bankName: 'American Express',  creditLimit: 50000, ageMonths: 120, utilization: 2,  reportingDate: '5th',  vendorPrice: 355, available: true },
  { id: '3',  cardType: 'Mastercard' as const, bankName: 'Capital One',       creditLimit: 15000, ageMonths: 60,  utilization: 8,  reportingDate: '15th', vendorPrice: 143, available: true },
  { id: '4',  cardType: 'Visa'       as const, bankName: 'Bank of America',   creditLimit: 35000, ageMonths: 96,  utilization: 3,  reportingDate: '1st',  vendorPrice: 250, available: true },
  { id: '5',  cardType: 'Discover'   as const, bankName: 'Discover',          creditLimit: 10000, ageMonths: 48,  utilization: 12, reportingDate: '10th', vendorPrice: 107, available: true },
  { id: '6',  cardType: 'Visa'       as const, bankName: 'Wells Fargo',       creditLimit: 20000, ageMonths: 72,  utilization: 5,  reportingDate: '5th',  vendorPrice: 178, available: true },
  { id: '7',  cardType: 'Mastercard' as const, bankName: 'Citi',              creditLimit: 45000, ageMonths: 108, utilization: 1,  reportingDate: '15th', vendorPrice: 320, available: true },
  { id: '8',  cardType: 'Amex'       as const, bankName: 'American Express',  creditLimit: 30000, ageMonths: 78,  utilization: 6,  reportingDate: '1st',  vendorPrice: 271, available: true },
  { id: '9',  cardType: 'Visa'       as const, bankName: 'US Bank',           creditLimit: 12000, ageMonths: 36,  utilization: 15, reportingDate: '10th', vendorPrice: 93,  available: true },
  { id: '10', cardType: 'Mastercard' as const, bankName: 'Barclays',          creditLimit: 22000, ageMonths: 66,  utilization: 7,  reportingDate: '5th',  vendorPrice: 200, available: true },
  { id: '11', cardType: 'Visa'       as const, bankName: 'Chase',             creditLimit: 40000, ageMonths: 90,  utilization: 2,  reportingDate: '1st',  vendorPrice: 285, available: true },
  { id: '12', cardType: 'Discover'   as const, bankName: 'Discover',          creditLimit: 8000,  ageMonths: 42,  utilization: 10, reportingDate: '15th', vendorPrice: 86,  available: true },
];
