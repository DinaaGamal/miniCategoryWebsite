import { TestBed } from "@angular/core/testing";

import { CategoriService } from "./categories.service";

describe("CategoriService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CategoriService = TestBed.get(CategoriService);
    expect(service).toBeTruthy();
  });
});
