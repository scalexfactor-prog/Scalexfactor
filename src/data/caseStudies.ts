import type { ComponentType } from 'react';
import { BajajLifeCareProfileCard, MyGetWellStoreProfileCard } from '@/components/cases/cards/HealthcareCompanyProfileCard';

export interface CaseStudyMeta {
  id: string;
  title: string;
  categories: string[];
  searchText: string;
  Card: ComponentType;
}

export const CASE_STUDIES: CaseStudyMeta[] = [
  {
    id: 'mygetwellstore-profile',
    title: 'MyGetWellStore',
    categories: ['healthcare', 'ecommerce'],
    searchText: 'mygetwellstore healthcare online store ecommerce medical equipment health monitoring devices home care web development technology seo digital marketing',
    Card: MyGetWellStoreProfileCard,
  },
  {
    id: 'bajaj-life-care-profile',
    title: 'Bajaj Life Care',
    categories: ['healthcare', 'medical-equipment'],
    searchText: 'bajaj life care bajajlifecare.com healthcare medical equipment manufacturer exporter flow meters oxygen cylinders anaesthesia equipment technology web development seo digital marketing',
    Card: BajajLifeCareProfileCard,
  },
];

export interface CaseFilter {
  id: string;
  label: string;
  count?: number;
}

export const CASE_FILTERS: CaseFilter[] = [
  { id: 'all', label: 'All Projects', count: 2 },
  { id: 'healthcare', label: 'Healthcare', count: 2 },
  { id: 'ecommerce', label: 'E-Commerce', count: 1 },
  { id: 'medical-equipment', label: 'Medical Equipment', count: 1 },
];
