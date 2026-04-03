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

// Shape returned by Tradeline Masters API
interface VendorTradeline {
  Id: number;
  Price?: number;
  SpotsAvailable?: number;
  Lender?: string;
  Limit?: number;
  AgeMonths?: number;
  Age?: number;
  Utilization?: number;
  ReportDate?: string;
  ReportingDate?: string;
  Network?: string;
  CardType?: string;
  Cycles?: Array<{ Months: number; Price: number }> | number;
  [key: string]: unknown; // allow extra fields
}

type MockTradeline = Omit<Tradeline, 'price'> & { vendorPrice: number };

function applyMarkup(vendorPrice: number): number {
  return Math.ceil((vendorPrice * MARKUP) / 5) * 5;
}

function applyMarkupToMock(items: MockTradeline[]): Tradeline[] {
  return items.map(({ vendorPrice, ...t }) => ({
    ...t,
    price: applyMarkup(vendorPrice),
  }));
}

function detectCardType(lender: string, network?: string): Tradeline['cardType'] {
  const src = (network ?? lender ?? '').toLowerCase();
  if (src.includes('amex') || src.includes('american express')) return 'Amex';
  if (src.includes('discover')) return 'Discover';
  if (
    src.includes('mastercard') ||
    src.includes('capital one') ||
    src.includes('citi') ||
    src.includes('barclays')
  )
    return 'Mastercard';
  return 'Visa';
}

function mapVendorTradeline(item: VendorTradeline): Tradeline {
  // Price may be top-level or nested inside Cycles array
  const vendorPrice =
    item.Price ??
    (Array.isArray(item.Cycles) ? (item.Cycles[0]?.Price ?? 200) : 200);

  return {
    id: String(item.Id),
    cardType: detectCardType(item.Lender ?? '', item.Network ?? item.CardType),
    bankName: item.Lender ?? 'Unknown Bank',
    creditLimit: item.Limit ?? 0,
    ageMonths: item.AgeMonths ?? item.Age ?? 60,
    utilization: item.Utilization ?? 1,
    reportingDate: item.ReportDate ?? item.ReportingDate ?? '1st',
    price: applyMarkup(vendorPrice),
    available: (item.SpotsAvailable ?? 1) > 0,
  };
}

export async function getTradelines(): Promise<Tradeline[]> {
  const userKey = process.env.TRADELINE_MASTERS_USER_KEY;
  const passKey = process.env.TRADELINE_MASTERS_PASS_KEY;

  if (!userKey || !passKey) {
    console.warn('[tradelines] API keys not configured — using mock data');
    return applyMarkupToMock(VENDOR_TRADELINES);
  }

  try {
    const credentials = Buffer.from(`${userKey}:${passKey}`).toString('base64');

    const res = await fetch('https://www.tradelinemaster.com/api/Tradeline', {
      headers: {
        Authorization: `Basic ${credentials}`,
        Referer: 'https://www.a1tradelines.com',
        APIVersion: '3',
        Accept: 'application/json',
      },
      next: { revalidate: 300 }, // cache 5 minutes in Next.js
    });

    if (!res.ok) {
      console.error(`[tradelines] API ${res.status} ${res.statusText} — falling back to mock`);
      return applyMarkupToMock(VENDOR_TRADELINES);
    }

    const data: VendorTradeline[] = await res.json();

    return data.map(mapVendorTradeline).filter((t) => t.available);
  } catch (err) {
    console.error('[tradelines] Fetch failed — falling back to mock:', err);
    return applyMarkupToMock(VENDOR_TRADELINES);
  }
}

// ---------------------------------------------------------------------------
// Fallback mock data (used when env vars are absent or API is unreachable)
// ---------------------------------------------------------------------------
const VENDOR_TRADELINES: MockTradeline[] = [
  { id: '1',  cardType: 'Visa',       bankName: 'Chase',            creditLimit: 25000, ageMonths: 84,  utilization: 0, reportingDate: '1st',  vendorPrice: 215, available: true },
  { id: '2',  cardType: 'Amex',       bankName: 'American Express', creditLimit: 50000, ageMonths: 120, utilization: 0, reportingDate: '5th',  vendorPrice: 355, available: true },
  { id: '3',  cardType: 'Mastercard', bankName: 'Capital One',      creditLimit: 15000, ageMonths: 60,  utilization: 1, reportingDate: '15th', vendorPrice: 143, available: true },
  { id: '4',  cardType: 'Visa',       bankName: 'Bank of America',  creditLimit: 35000, ageMonths: 96,  utilization: 0, reportingDate: '1st',  vendorPrice: 250, available: true },
  { id: '5',  cardType: 'Discover',   bankName: 'Discover',         creditLimit: 10000, ageMonths: 48,  utilization: 1, reportingDate: '10th', vendorPrice: 107, available: true },
  { id: '6',  cardType: 'Visa',       bankName: 'Wells Fargo',      creditLimit: 20000, ageMonths: 72,  utilization: 0, reportingDate: '5th',  vendorPrice: 178, available: true },
  { id: '7',  cardType: 'Mastercard', bankName: 'Citi',             creditLimit: 45000, ageMonths: 108, utilization: 0, reportingDate: '15th', vendorPrice: 320, available: true },
  { id: '8',  cardType: 'Amex',       bankName: 'American Express', creditLimit: 30000, ageMonths: 78,  utilization: 1, reportingDate: '1st',  vendorPrice: 271, available: true },
  { id: '9',  cardType: 'Visa',       bankName: 'US Bank',          creditLimit: 12000, ageMonths: 36,  utilization: 0, reportingDate: '10th', vendorPrice: 93,  available: true },
  { id: '10', cardType: 'Mastercard', bankName: 'Barclays',         creditLimit: 22000, ageMonths: 66,  utilization: 1, reportingDate: '5th',  vendorPrice: 200, available: true },
  { id: '11', cardType: 'Visa',       bankName: 'Chase',            creditLimit: 40000, ageMonths: 90,  utilization: 0, reportingDate: '1st',  vendorPrice: 285, available: true },
  { id: '12', cardType: 'Discover',   bankName: 'Discover',         creditLimit: 8000,  ageMonths: 42,  utilization: 1, reportingDate: '15th', vendorPrice: 86,  available: true },
];
