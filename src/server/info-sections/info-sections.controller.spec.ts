import { Test, TestingModule } from "@nestjs/testing";
import { InfoSectionsController } from "./info-sections.controller";
import { InfoSectionsService } from "./info-sections.service";

describe("InfoSectionsController", () => {
    let controller: InfoSectionsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [InfoSectionsController],
            providers: [InfoSectionsService],
        }).compile();

        controller = module.get<InfoSectionsController>(InfoSectionsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
