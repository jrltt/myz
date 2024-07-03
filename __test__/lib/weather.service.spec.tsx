import { getWeather } from "@/lib/weather.service";

const mockResponse = {
  location: { name: "Madrid" },
  current: { temp_c: 19.4 },
};
describe("Weather service", () => {
  it("should use the `key` param in the URL", async () => {
    const spyOnFetch = jest.spyOn(window, "fetch");
    // TODO: add msw
    spyOnFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ...mockResponse, success: true }),
    } as any);

    const sut = await getWeather();

    expect(spyOnFetch).toHaveBeenCalledWith(expect.stringMatching("key"));
    expect(sut).resolves.toContain(true);
  });

  it.todo("should raise an error on wrong params");
});
