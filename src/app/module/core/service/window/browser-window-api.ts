/**
 * The Browser Window API
 *
 * Any use of the window API needs to be defined in this interface
 * and implemented in WindowServerService
 */
export interface BrowserWindowApi {
  location: {
    protocol: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    search: string;
    hash: string;
    assign(url: string): void;
  };
}
