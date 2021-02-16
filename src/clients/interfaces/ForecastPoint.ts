export interface ForecastPoint {
    readonly time: string;
    readonly weaveHeight: number;
    readonly waveDirection: number;
    readonly swellDirection: number;
    readonly swellHeight: number;
    readonly swellPeriod: number;
    readonly waveHeight: number;
    readonly windDirection: number;
    readonly windSpeed: number;
}