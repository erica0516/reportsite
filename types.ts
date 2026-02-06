
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface InsightTag {
  id: string;
  label: string;
}