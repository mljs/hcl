export type AgglomerationMethod =
  | 'single'
  | 'complete'
  | 'average'
  | 'upgma'
  | 'wpgma'
  | 'median'
  | 'wpgmc'
  | 'centroid'
  | 'upgmc'
  | 'ward';

export interface AgnesOptions<T> {
  distanceFunction?: (a: T, b: T) => number;
  method?: AgglomerationMethod;
  isDistanceMatrix?: boolean;
}

// export interface DianaOptions<T> {
//   distanceFunction?: (a: T, b: T) => number;
// }

export interface Cluster {
  children: Cluster[];
  height: number;
  size: number;
  index: number;
  isLeaf: boolean;
  // cut: (threshold: number) => Cluster[];
  // group: (minGroups: number) => Cluster;
  // traverse: (cb: (cluster: Cluster) => void) => void;
}

export function agnes<T = number[]>(
  data: T[],
  options?: AgnesOptions<T>,
): Cluster;

// export function diana<T = number[]>(
//   data: T[],
//   options?: DianaOptions<T>,
// ): Cluster;
