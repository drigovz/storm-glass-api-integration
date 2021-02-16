import { AxiosStatic } from "axios";
import { ForecastPoint } from "./interfaces/ForecastPoint";
import { StormGlassForecastResponse } from "./interfaces/StormGlassForecastResponse";
import { StormGlassPoint } from "./interfaces/StormGlassPoint";

export class StormGlass {
    readonly stormGlassApiParams = 'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassApiSource = 'noaa';

    constructor(protected request: AxiosStatic) { }

    private isValidPoint(point: Partial<StormGlassPoint>): boolean {
        return !!(
            point.time &&
            point.swellDirection?.[this.stormGlassApiSource] &&
            point.swellHeight?.[this.stormGlassApiSource] &&
            point.swellPeriod?.[this.stormGlassApiSource] &&
            point.swellDirection?.[this.stormGlassApiSource] &&
            point.waveHeight?.[this.stormGlassApiSource] &&
            point.windDirection?.[this.stormGlassApiSource] &&
            point.windSpeed?.[this.stormGlassApiSource]
        );
    }

    private normalizeResponse(points: StormGlassForecastResponse): ForecastPoint[] {
        return points.hours
            .filter(this.isValidPoint.bind(this))
            .map((point) => ({
                time: point.time,
                weaveHeight: point.waveHeight[this.stormGlassApiSource],
                waveDirection: point.waveDirection[this.stormGlassApiSource],
                swellDirection: point.swellDirection[this.stormGlassApiSource],
                swellHeight: point.swellHeight[this.stormGlassApiSource],
                swellPeriod: point.swellPeriod[this.stormGlassApiSource],
                waveHeight: point.waveHeight[this.stormGlassApiSource],
                windDirection: point.windDirection[this.stormGlassApiSource],
                windSpeed: point.windSpeed[this.stormGlassApiSource],
            }));
    }

    public async fetchPoints(lat: number, lng: number): Promise<ForecastPoint[]> {
        const response = await this.request.get<StormGlassForecastResponse>(
            `https://api.stormglass.io/v2/weather/point?params=${this.stormGlassApiParams}&source=${this.stormGlassApiSource}&lat=${lat}&lng=${lng}`
        );

        return this.normalizeResponse(response.data);
    }
}