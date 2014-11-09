package org.mofd.jsevaluation.backend.server.filter;


import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URL;

/**
 * TODO: Document me
 *
 * @author konstantinsteuer
 * @since 09.11.14
 */
@Component("corsFilter")
public class CorsFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String corsHeader = createOriginUrl(request);
        if (corsHeader != null) {
            response.addHeader("Access-Control-Allow-Origin", corsHeader);
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }

    private String createOriginUrl(HttpServletRequest request) {
        String origin = request.getHeader("Origin");
        if (StringUtils.isEmpty(origin)) {
            return null;
        } else {
            try {
                URL url = new URL(origin);
                return url.getProtocol() + "://" + url.getHost() + ":" + url.getPort();
            } catch (Exception e) {
                return request.getRequestURL().toString();
            }
        }
    }


}

