import { format } from "prettier";
import { StormGlassPointSource } from '@src/clients/interfaces/StormGlassPointSource';

export interface StormGlassPoint {
    readonly time: string;
    readonly weaveHeight: StormGlassPointSource;
    readonly waveDirection: StormGlassPointSource;
    readonly swellDirection: StormGlassPointSource;
    readonly swellHeight: StormGlassPointSource;
    readonly swellPeriod: StormGlassPointSource;
    readonly waveHeight: StormGlassPointSource;
    readonly windDirection: StormGlassPointSource;
    readonly windSpeed: StormGlassPointSource;
}