/**
 * Verified client metrics.
 *
 * Only add entries here once the number is confirmed with the client and can be
 * cited publicly. The metrics band on /results renders only when this array has
 * entries, so an empty array is safe to ship.
 */
export interface ProofMetric {
  value: string;
  label: string;
  note?: string;
}

export const proofMetrics: ProofMetric[] = [];

/**
 * Anonymised case studies. Same rule: add only when the outcome is confirmed.
 */
export interface AnonymisedCase {
  sector: string;
  challenge: string;
  outcome: string;
}

export const anonymisedCases: AnonymisedCase[] = [];
