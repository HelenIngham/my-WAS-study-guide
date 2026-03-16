// pages/Resources.js
import React from "react";
import { routes } from "../routesMeta";
import { Link } from "react-router-dom";

function Resources() {
    // Group routes by domain
    const domains = [
        { id: "domain-one", title: "Domain One: Creating Accessible Web Solutions", routes: [] },
        { id: "domain-two", title: "Domain Two: Testing and Validation", routes: [] },
        { id: "domain-three", title: "Domain Three: Recommendations and Procurement", routes: [] },
        { id: "other", title: "Other Resources", routes: [] }
    ];

    routes.forEach(route => {
        if (route.path === "/") {
            domains[3].routes.push(route);
        } else if (route.path.startsWith("/domain-one")) {
            domains[0].routes.push(route);
        } else if (route.path.startsWith("/domain-two")) {
            domains[1].routes.push(route);
        } else if (route.path.startsWith("/domain-three")) {
            domains[2].routes.push(route);
        } else {
            domains[3].routes.push(route);
        }
    });

    return (
        <div className="container">
            <h1>Resources</h1>
            <p>Helpful resources and further reading for the WAS exam.</p>

            <section className="site-map" style={{ marginTop: "2rem" }}>
                <h2>Site Map</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                    {domains.map(domain => (
                        domain.routes.length > 0 && (
                            <div key={domain.id} className="topic-card" style={{ height: "fit-content" }}>
                                <div className="topic-header">
                                    <h3 style={{ margin: 0, color: "var(--color-primary)" }}>{domain.title}</h3>
                                </div>
                                <ul className="site-map-list">
                                    {domain.routes.map(route => {
                                        // Simple indentation for sub-pages
                                        const isSubPage = route.path.split("/").length > 2;
                                        const isDeepSubPage = route.path.split("/").length > 3;
                                        
                                        return (
                                            <li key={route.path} className="site-map-item" style={{ 
                                                paddingLeft: isDeepSubPage ? "30px" : isSubPage ? "15px" : "0"
                                            }}>
                                                <Link 
                                                    to={route.path} 
                                                    className={`site-map-link ${isSubPage ? "site-map-link-secondary" : "site-map-link-primary"}`}
                                                >
                                                    {route.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Resources;