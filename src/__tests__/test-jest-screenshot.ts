jest.mock("../to-match-image-snapshot");
// jest.mock("../to-match-image-from-s3");
import { setupJestScreenshot } from "..";
import { toMatchImageSnapshot } from "../to-match-image-snapshot";
import { toMatchImageSnapshotFromS3 } from "../to-match-image-from-s3";

describe("jestScreenshot", () => {
    const someBuffer = Buffer.alloc(10);

    it("s3", () => {
        setupJestScreenshot();
        expect(someBuffer).toMatchImageSnapshotFromS3();
        // expect(toMatchImageSnapshotFromS3).toHaveBeenCalledWith(
        //     someBuffer,
        //     { pixelThresholdRelative: 0 },
        //     undefined,
        // );
    });

    it("uses `0` as relative threshold if no threshold is provided", () => {
        setupJestScreenshot();
        expect(someBuffer).toMatchImageSnapshot();
        expect(toMatchImageSnapshot).toHaveBeenCalledWith(
            someBuffer,
            { pixelThresholdRelative: 0 },
            undefined,
        );
    });

    it("throws an error if called outside of jest", () => {
        const originalExpect = expect;
        (global as any).expect = undefined;
        originalExpect(() => setupJestScreenshot()).toThrowErrorMatchingSnapshot();
        (global as any).expect = originalExpect;
    });
});
