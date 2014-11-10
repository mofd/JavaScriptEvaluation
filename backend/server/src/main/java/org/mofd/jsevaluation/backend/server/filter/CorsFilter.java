package org.mofd.jsevaluation.backend.server.filter;


import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URL;

/**
 * CorsFilter.
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@Component("corsFilter")
public class CorsFilter implements Filter {

	private static final int HTTPS_DEFAULT_PORT = 443;
	private static final int HTTP_DEFAULT_PORT = 80;

	static final String ORIGIN_HEADER = "Origin";
	static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
	static final String ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method";
	static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
	static final String ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers";
	static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) servletRequest;
		HttpServletResponse response = (HttpServletResponse) servletResponse;
		String originUrl = getOriginUrl(request);
		if (originUrl != null) {
			response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, originUrl);
			String methods = request.getHeader(ACCESS_CONTROL_REQUEST_METHOD);
			if (!StringUtils.isEmpty(methods)) {
				response.setHeader(ACCESS_CONTROL_ALLOW_METHODS, methods);
			}
			String headers = request.getHeader(ACCESS_CONTROL_REQUEST_HEADERS);
			if (!StringUtils.isEmpty(headers)) {
				response.setHeader(ACCESS_CONTROL_ALLOW_HEADERS, headers);
			}
		}

		filterChain.doFilter(servletRequest, servletResponse);
	}

	private String getOriginUrl(HttpServletRequest request) {
		String origin = request.getHeader(ORIGIN_HEADER);
		if (StringUtils.isEmpty(origin)) {
			return null;
		} else {
			try {
				URL originUrl = new URL(origin);
				StringBuilder url = new StringBuilder();
				String scheme = originUrl.getProtocol();
				int port = originUrl.getPort();

				url.append(scheme);
				url.append("://");
				url.append(originUrl.getHost());
				if (port > 0 && ((scheme.equalsIgnoreCase("http") && port != HTTP_DEFAULT_PORT) || (scheme
					.equalsIgnoreCase("https") && port != HTTPS_DEFAULT_PORT))) {
					url.append(":");
					url.append(port);
				}

				return url.toString();
			} catch (Exception e) {
				return origin;
			}
		}
	}

	@Override
	public void destroy() {

	}


}

