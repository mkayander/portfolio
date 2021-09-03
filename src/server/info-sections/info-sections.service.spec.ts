import { Test, TestingModule } from "@nestjs/testing";
import { InfoSectionsService } from "./info-sections.service";

describe("InfoSectionsService", () => {
    let service: InfoSectionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [InfoSectionsService],
        }).compile();

        service = module.get<InfoSectionsService>(InfoSectionsService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
