import { batch3Content } from './guides-content-batch3';
import { batch12Content } from './guides-content-batch12';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export const guidesContent: Record<string, ContentSection[]> = {
  ...batch12Content,
  ...batch3Content,
};
