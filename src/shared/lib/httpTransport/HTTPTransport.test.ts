import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import { expect } from 'chai';
import { HTTPTransport } from './HTTPTransport.ts';
import { API_DEFAULT_PATH } from '../../constants/api.ts';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let httpTransport: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    (global as any).XMLHttpRequest = xhr;

    httpTransport = new HTTPTransport('');

    xhr.onCreate = function (xhr) {
      requests.push(xhr);
    };
  });

  afterEach(() => {
    requests = [];
    xhr.restore();
  });

  it('should invoke request', () => {
    httpTransport.GET('/');
    const [request] = requests;

    expect(request).to.exist;
  });

  it('should invoke GET request', () => {
    httpTransport.GET('/');
    const [request] = requests;

    expect(request.method).to.equal('GET');
  });

  it('should invoke GET request with search parameters', () => {
    httpTransport.GET('/', { data: { name: 'request', test: 'success' } });
    const [request] = requests;

    expect(request.url).to.equal(
      API_DEFAULT_PATH + '/?name=request&test=success',
    );
  });

  it('should invoke GET request with search parameters if they not string', () => {
    httpTransport.GET('/', { data: { name: 1, test: true } });
    const [request] = requests;

    expect(request.url).to.equal(API_DEFAULT_PATH + '/?name=1&test=true');
  });

  it('should invoke GET request with search parameters if they have symbols', () => {
    httpTransport.GET('/', { data: { name: 'text text', test: '"success?"' } });
    const [request] = requests;

    expect(request.url).to.equal(
      API_DEFAULT_PATH + '/?name=text%20text&test=%22success%3F%22',
    );
  });

  it('should invoke PUT request with credentials', () => {
    httpTransport.GET('/');
    const [request] = requests;

    expect(request.withCredentials).to.equal(true);
  });

  it('should invoke PUT request', () => {
    httpTransport.PUT('/');
    const [request] = requests;

    expect(request.method).to.equal('PUT');
  });

  it('should invoke PUT request with string data', () => {
    const requestData = {
      name: 'data',
      value: 1,
      content: [1, 2, 3],
    };
    httpTransport.PUT('/', { data: requestData });
    const [request] = requests;

    expect(request.requestBody).to.equal(JSON.stringify(requestData));
  });

  it('should invoke request with content header', () => {
    httpTransport.POST('/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const [request] = requests;

    expect(request.requestHeaders['Content-Type']).to.equal(
      'application/json;charset=utf-8',
    );
  });

  it('should invoke POST request', () => {
    httpTransport.POST('/');
    const [request] = requests;

    expect(request.method).to.equal('POST');
  });

  it('should invoke DELETE request', () => {
    httpTransport.DELETE('/');
    const [request] = requests;

    expect(request.method).to.equal('DELETE');
  });
});
