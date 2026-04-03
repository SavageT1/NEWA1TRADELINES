// Client-accessible tradeline data (no async, safe for 'use client' pages)
// Utilization is kept at 0-2% by sellers — standard for tradelines listed for sale
import type { Tradeline } from './tradelines';

export type { Tradeline };

export const MOCK_TRADELINES: Tradeline[] = [
  { id: '1',  cardType: 'Visa',       bankName: 'Chase',            creditLimit: 25000, ageMonths: 84,  utilization: 0, reportingDate: '1st',  price: 305, available: true },
  { id: '2',  cardType: 'Amex',       bankName: 'American Express', creditLimit: 50000, ageMonths: 120, utilization: 0, reportingDate: '5th',  price: 500, available: true },
  { id: '3',  cardType: 'Mastercard', bankName: 'Capital One',      creditLimit: 15000, ageMonths: 60,  utilization: 1, reportingDate: '15th', price: 205, available: true },
  { id: '4',  cardType: 'Visa',       bankName: 'Bank of America',  creditLimit: 35000, ageMonths: 96,  utilization: 0, reportingDate: '1st',  price: 350, available: true },
  { id: '5',  cardType: 'Discover',   bankName: 'Discover',         creditLimit: 10000, ageMonths: 48,  utilization: 2, reportingDate: '10th', price: 150, available: true },
  { id: '6',  cardType: 'Visa',       bankName: 'Wells Fargo',      creditLimit: 20000, ageMonths: 72,  utilization: 0, reportingDate: '5th',  price: 250, available: true },
  { id: '7',  cardType: 'Mastercard', bankName: 'Citi',             creditLimit: 45000, ageMonths: 108, utilization: 0, reportingDate: '15th', price: 450, available: true },
  { id: '8',  cardType: 'Amex',       bankName: 'American Express', creditLimit: 30000, ageMonths: 78,  utilization: 1, reportingDate: '1st',  price: 380, available: true },
  { id: '9',  cardType: 'Visa',       bankName: 'US Bank',          creditLimit: 12000, ageMonths: 36,  utilization: 0, reportingDate: '10th', price: 130, available: true },
  { id: '10', cardType: 'Mastercard', bankName: 'Barclays',         creditLimit: 22000, ageMonths: 66,  utilization: 2, reportingDate: '5th',  price: 280, available: true },
  { id: '11', cardType: 'Visa',       bankName: 'Chase',            creditLimit: 40000, ageMonths: 90,  utilization: 0, reportingDate: '1st',  price: 400, available: true },
  { id: '12', cardType: 'Discover',   bankName: 'Discover',         creditLimit: 8000,  ageMonths: 42,  utilization: 1, reportingDate: '15th', price: 120, available: true },
];
