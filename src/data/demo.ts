/* Hero "analysis" mockup — language-neutral base data.
   Translated caption/title/tags come from the dictionary (demoCaps / demoTitles / demoTags). */
export interface DemoClip {
  raw: string;
  thumb: string;
  specs: string[];
}

export const DEMO: DemoClip[] = [
  { raw: 'C0079.MP4',      thumb: 'linear-gradient(140deg,#e0763a,#b8408f)', specs: ['16:9', '8K', '25 fps'] },
  { raw: 'DJI_0042.MP4',   thumb: 'linear-gradient(140deg,#3a4d8f,#6b53b0)', specs: ['9:16', '4K', '120 fps'] },
  { raw: 'GX010214.MP4',   thumb: 'linear-gradient(140deg,#1f8a7a,#2f6fd0)', specs: ['16:9', '5.3K', '60 fps'] },
  { raw: 'A001_07120Q.mov', thumb: 'linear-gradient(140deg,#6a4cb0,#9a4f8f)', specs: ['9:16', '6K', '25 fps'] },
  { raw: 'GH013002.MP4',   thumb: 'linear-gradient(140deg,#2b6fb0,#1f9a8a)', specs: ['16:9', '4K', '120 fps'] },
];
