"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/Hero";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

interface SubServiceDetail {
  title: string;
  titleAccent: string;
  description: string;
  heroBackground: string;
  heroDescription: string;
  overview: string;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaButtonText: string;
}

export default function SubServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const subSlug = Array.isArray(params.subslug)
    ? params.subslug.join("/")
    : (params.subslug as string);

  // Function to get sub-service data based on slug and subslug
  const getSubServiceData = (
    slug: string,
    subSlug: string
  ): SubServiceDetail => {
    const subServiceDataMap: Record<
      string,
      Record<string, SubServiceDetail>
    > = {
      "strategic-advisory": {
        "monthly-quarterly-performance": {
          title: "Monthly & Quarterly",
          titleAccent: "Performance",
          description:
            "Comprehensive monthly and quarterly performance tracking and analysis to optimize your business operations.",
          heroBackground: "/images/chess.png",
          heroDescription:
            "Track and analyze your business performance with detailed monthly and quarterly reports. Get insights that drive strategic decisions and sustainable growth.",
          overview:
            "Our Monthly & Quarterly Performance service provides detailed tracking and analysis of your business metrics, helping you identify trends, opportunities, and areas for improvement.",
          benefits: [
            "Detailed performance metrics and KPIs tracking",
            "Monthly and quarterly trend analysis",
            "Benchmarking against industry standards",
            "Actionable insights and recommendations",
            "Customized reporting dashboards",
            "Regular performance reviews and updates",
          ],
          process: [
            {
              step: 1,
              title: "Data Collection",
              description:
                "Gather comprehensive business data and performance metrics.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Analysis & Reporting",
              description:
                "Analyze data and create comprehensive performance reports.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Strategic Recommendations",
              description:
                "Provide actionable insights and strategic recommendations.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Performance Dashboards",
              description:
                "Real-time dashboards showing key performance indicators and trends.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              title: "Trend Analysis",
              description:
                "Comprehensive analysis of performance trends and patterns.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ),
            },
            {
              title: "Custom Reports",
              description:
                "Tailored reports designed for your specific business needs.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Start Tracking",
          ctaTitleAccent: "Your Performance",
          ctaButtonText: "Get Started",
        },
        "financial-operational-monitoring": {
          title: "Financial & Operational",
          titleAccent: "Monitoring",
          description:
            "Comprehensive monitoring of financial and operational metrics to ensure optimal business performance.",
          heroBackground: "/images/stock.png",
          heroDescription:
            "Monitor your financial and operational health with comprehensive tracking and analysis. Stay ahead of challenges and opportunities.",
          overview:
            "Our Financial & Operational Monitoring service provides continuous oversight of your business metrics, ensuring optimal performance and early identification of issues.",
          benefits: [
            "Real-time financial health monitoring",
            "Operational efficiency tracking",
            "Early warning systems for potential issues",
            "Regular health check reports",
            "Performance optimization recommendations",
            "Custom monitoring dashboards",
          ],
          process: [
            {
              step: 1,
              title: "System Setup",
              description:
                "Establish monitoring systems and data collection processes.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Data Analysis",
              description:
                "Analyze collected data and identify key performance indicators.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Reporting & Alerts",
              description:
                "Generate reports and set up alert systems for critical metrics.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4.5 19.5h15a2 2 0 002-2V6a2 2 0 00-2-2h-15a2 2 0 00-2 2v11.5a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Financial Health Tracking",
              description:
                "Comprehensive monitoring of financial metrics and health indicators.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              ),
            },
            {
              title: "Operational Metrics",
              description:
                "Track operational efficiency and performance indicators.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              title: "Alert Systems",
              description:
                "Automated alerts for critical threshold breaches and anomalies.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4.5 19.5h15a2 2 0 002-2V6a2 2 0 00-2-2h-15a2 2 0 00-2 2v11.5a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Monitor Your",
          ctaTitleAccent: "Business Health",
          ctaButtonText: "Start Monitoring",
        },
        "ad-hoc-strategic-advisory": {
          title: "Ad Hoc Strategic",
          titleAccent: "Advisory",
          description:
            "On-demand strategic advisory services for specific business challenges and opportunities.",
          heroBackground: "/images/t-stock.png",
          heroDescription:
            "Get expert strategic guidance when you need it most. Our ad hoc advisory services provide targeted solutions for specific business challenges.",
          overview:
            "Our Ad Hoc Strategic Advisory service provides flexible, on-demand strategic guidance for specific business challenges, opportunities, or critical decisions.",
          benefits: [
            "Flexible, on-demand advisory services",
            "Expert guidance for specific challenges",
            "Quick turnaround for urgent decisions",
            "Customized solutions for unique situations",
            "Access to senior strategic expertise",
            "Cost-effective for targeted needs",
          ],
          process: [
            {
              step: 1,
              title: "Challenge Assessment",
              description:
                "Understand and assess your specific business challenge or opportunity.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Strategic Analysis",
              description:
                "Conduct focused analysis and develop strategic recommendations.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Implementation Support",
              description:
                "Provide guidance and support for implementing strategic recommendations.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Rapid Response",
              description:
                "Quick turnaround for urgent strategic decisions and challenges.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Expert Insights",
              description:
                "Access to senior strategic expertise and industry knowledge.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
            },
            {
              title: "Custom Solutions",
              description:
                "Tailored strategic solutions for your specific business needs.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Get Expert",
          ctaTitleAccent: "Strategic Guidance",
          ctaButtonText: "Consult Now",
        },
      },
      "sell-side-advisory": {
        "business-valuation": {
          title: "Business",
          titleAccent: "Valuation",
          description:
            "Comprehensive business valuation services to determine the true worth of your company.",
          heroBackground: "/images/stock.png",
          heroDescription:
            "Get an accurate and comprehensive valuation of your business. Our expert valuation services help you understand your company's true worth.",
          overview:
            "Our Business Valuation service provides detailed analysis and assessment of your company's value, considering all relevant factors and market conditions.",
          benefits: [
            "Comprehensive valuation analysis",
            "Multiple valuation methodologies",
            "Market-based assessments",
            "Detailed valuation reports",
            "Expert witness support",
            "Strategic value optimization",
          ],
          process: [
            {
              step: 1,
              title: "Data Collection",
              description:
                "Gather comprehensive financial and operational data for analysis.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Valuation Analysis",
              description:
                "Apply multiple valuation methodologies and market analysis.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Report & Recommendations",
              description:
                "Deliver comprehensive valuation report with strategic recommendations.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Multiple Methodologies",
              description:
                "DCF, market multiples, and asset-based valuation approaches.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
            {
              title: "Market Analysis",
              description:
                "Comprehensive analysis of market conditions and comparable transactions.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Expert Reports",
              description:
                "Detailed valuation reports suitable for legal and financial purposes.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Get Your Business",
          ctaTitleAccent: "Valued",
          ctaButtonText: "Start Valuation",
        },
        "buyer-identification": {
          title: "Buyer",
          titleAccent: "Identification",
          description:
            "Strategic identification and targeting of qualified buyers for your business.",
          heroBackground: "/images/t-stock.png",
          heroDescription:
            "Find the right buyers for your business with our strategic buyer identification services. We help you target qualified prospects who can maximize your exit value.",
          overview:
            "Our Buyer Identification service helps you identify, research, and target qualified buyers who are most likely to provide optimal value for your business exit.",
          benefits: [
            "Strategic buyer targeting",
            "Qualified prospect research",
            "Buyer qualification analysis",
            "Market intelligence gathering",
            "Relationship building support",
            "Competitive positioning",
          ],
          process: [
            {
              step: 1,
              title: "Market Research",
              description:
                "Research potential buyers and market opportunities.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Buyer Qualification",
              description:
                "Qualify and analyze potential buyers for strategic fit.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Strategic Outreach",
              description: "Develop and execute targeted outreach strategies.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Strategic Targeting",
              description:
                "Identify buyers with strategic fit and financial capability.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Market Intelligence",
              description:
                "Comprehensive market research and buyer intelligence.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
            {
              title: "Relationship Building",
              description:
                "Strategic relationship building with potential buyers.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Find Your",
          ctaTitleAccent: "Perfect Buyer",
          ctaButtonText: "Start Search",
        },
        "transaction-management": {
          title: "Transaction",
          titleAccent: "Management",
          description:
            "Comprehensive transaction management services for successful business exits.",
          heroBackground: "/images/chess.png",
          heroDescription:
            "Navigate complex transactions with expert management services. We guide you through every step of the sale process to ensure optimal outcomes.",
          overview:
            "Our Transaction Management service provides comprehensive support throughout the entire sale process, from initial negotiations to final closing.",
          benefits: [
            "End-to-end transaction support",
            "Expert negotiation assistance",
            "Due diligence management",
            "Legal and regulatory guidance",
            "Timeline and milestone tracking",
            "Risk mitigation strategies",
          ],
          process: [
            {
              step: 1,
              title: "Transaction Planning",
              description:
                "Develop comprehensive transaction strategy and timeline.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              ),
            },
            {
              step: 2,
              title: "Execution Support",
              description:
                "Provide ongoing support throughout the transaction process.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              step: 3,
              title: "Closing & Integration",
              description:
                "Ensure smooth closing and post-transaction integration.",
              icon: (
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ],
          features: [
            {
              title: "Process Management",
              description:
                "Comprehensive management of the entire transaction process.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              ),
            },
            {
              title: "Negotiation Support",
              description:
                "Expert negotiation support to maximize transaction value.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
            {
              title: "Risk Management",
              description:
                "Comprehensive risk assessment and mitigation strategies.",
              icon: (
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              ),
            },
          ],
          ctaTitle: "Manage Your",
          ctaTitleAccent: "Transaction",
          ctaButtonText: "Start Process",
        },
      },
    };

    return (
      subServiceDataMap[slug]?.[subSlug] ||
      subServiceDataMap["strategic-advisory"]["monthly-quarterly-performance"]
    );
  };

  const subServiceData = getSubServiceData(slug, subSlug);

  const heroData = {
    backgroundImage: subServiceData.heroBackground,
    title: subServiceData.title,
    titleAccent: subServiceData.titleAccent,
    description: subServiceData.heroDescription,
    buttons: [
      {
        text: "Get Started",
        href: "/contact",
        variant: "primary" as const,
        icon: true,
      },
    ],
    textAlign: "left" as const,
    showScrollDown: true,
  };
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <main>
      {/* Hero Section */}
      <Hero {...heroData} />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      >
        <div className={styles.background} />

        <Parallax pages={5}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <p className={styles.scrollText}>Scroll down</p>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 3 }}
            style={{ ...alignCenter, justifyContent: "flex-start" }}
          >
            <div className={`${styles.card} ${styles.sticky}`}>
              <p>I&apos;m a sticky layer</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div
              className={`${styles.card} ${styles.parallax} ${styles.purple}`}
            >
              <p>I&apos;m not</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: "flex-end" }}
          >
            <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
              <p>Neither am I</p>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
