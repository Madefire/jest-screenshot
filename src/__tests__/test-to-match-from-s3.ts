import { setupJestScreenshot } from "..";
import { toMatchImageSnapshotFromS3 } from "../to-match-image-from-s3";
import { SnapshotState, JestTestConfiguration } from "../jest";
import { readdirSync, readFileSync, unlinkSync, existsSync, writeFileSync } from "fs";
import * as rimraf from "rimraf";

function getJestTestConfiguration(): JestTestConfiguration {
    let testConfiguration: JestTestConfiguration;
    expect.extend({
        storeSnapshotState() {
            testConfiguration = this as any;
            return {
                pass: true,
                message() { return ""; },
            };
        },
    });
    (expect as any)().storeSnapshotState();
    return testConfiguration;
}

describe("toMatchImageFromS3", () => {
    beforeEach(() => {
        setupJestScreenshot();
    });

    describe("test", () => {
        it("done", () => {
          const fileName = `${__dirname}/fixtures/red-rectangle-example-gradient.png`;
          const file = readFileSync(fileName);
          expect(() => {
            expect(file).toMatchImageSnapshot();
          }).not.toThrowError();
        });
    });

});
