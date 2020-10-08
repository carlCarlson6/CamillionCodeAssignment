export interface IDatabaseConnector {
    Connect(): Promise<void>;
}