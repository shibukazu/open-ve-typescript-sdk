type CheckRequestValidation = {
  id: string;
  variables: Record<string, any>;
};

type CheckRequest = {
  validations: CheckRequestValidation[];
};

type CheckResponseResult = {
  id: string;
  isValid: boolean;
  message: string;
};

type CheckResponse = {
  results: CheckResponseResult[];
};

type Config = {
  url: string;
  version?: string;
};

export class Client {
  private url: string;
  private version: string;
  constructor({ url, version = "v1" }: Config) {
    this.url = url;
    this.version = version;
  }

  async check(checkRequest: CheckRequest): Promise<CheckResponse> {
    const requestBody = JSON.stringify(checkRequest);

    const endpoint = new URL(`${this.version}/check`, this.url).toString();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBody = await response.json();
    return responseBody as CheckResponse;
  }
}
