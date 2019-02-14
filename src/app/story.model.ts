export interface TableData {
  title: string;
  url: string;
  created_at: string;
  author: string;
}


export interface RootObject {
  hits: HitsItem[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}

export interface HitsItem {
  created_at: string;
  title: string;
  url: string | null;
  author: string;
  points: number;
  story_text: null | string;
  comment_text: null;
  num_comments: number;
  story_id: null;
  story_title: null;
  story_url: null;
  parent_id: null;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  title: Title;
  url?: Url;
  author: Author;
  story_text?: Storytext;
}

export interface Title {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Url {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}


export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Storytext {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}
