import { ToMatchImageSnapshotParameters } from "./to-match-image-snapshot";

declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchImageSnapshot(parameters?: ToMatchImageSnapshotParameters): R;
            toMatchImageSnapshotFromS3(parameters?: ToMatchImageSnapshotParameters): R;
        }
    }
}

export { setupJestScreenshot } from "./jest-screenshot";
export { toMatchImageSnapshot } from "./to-match-image-snapshot";
export { toMatchImageSnapshotFromS3 } from "./to-match-image-from-s3";
export { JestScreenshotConfiguration, config } from "./config";
