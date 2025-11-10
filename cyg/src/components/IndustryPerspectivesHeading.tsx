"use client";

interface IndustryPerspectivesHeadingProps {
  title: string;
  titleAccent: string;
  description: string;
}

export default function IndustryPerspectivesHeading({
  title,
  titleAccent,
  description,
}: IndustryPerspectivesHeadingProps) {
  return (
    <>
      <div
        className="text-center text-white industry-perspectives-heading"
        style={{
          backgroundColor: "#262626",
          paddingTop: "clamp(4rem, 10vh, 6rem)",
          paddingBottom: "clamp(2rem, 5vh, 4rem)",
          paddingLeft: "clamp(2rem, 10vw, 2rem)",
          paddingRight: "clamp(2rem, 10vw, 2rem)",
        }}
      >
        <h2
          className="industry-perspectives-heading-title"
          style={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "clamp(2rem, 5vw, 4.375rem)",
            textAlign: "center",
            margin: 0,
            marginBottom: "clamp(0.75rem, 2vh, 1.25rem)",
          }}
        >
          {title}{" "}
          <span style={{ color: "#77EB8A" }}>{titleAccent}</span>
        </h2>
        <p
          className="industry-perspectives-heading-description"
          style={{
            fontFamily: "Grift, Arial, sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            textAlign: "center",
            width: "clamp(40%, 50vw, 659px)",
            maxWidth: "50%",
            minHeight: "clamp(60px, 8vh, 80px)",
            margin: "0 auto",
            color: "white",
          }}
        >
          {description}
        </p>
      </div>

      {/* Desktop lock: Maintain original desktop view */}
      <style jsx global>{`
        @media (min-width: 1920px) {
          .industry-perspectives-heading {
            padding-top: 3rem !important;
            padding-bottom: 4rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .industry-perspectives-heading-title {
            font-size: 70px !important;
            line-height: 70px !important;
            margin-bottom: 20px !important;
          }
          .industry-perspectives-heading-description {
            font-size: 32px !important;
            line-height: 40px !important;
            width: 659px !important;
            max-width: 659px !important;
            height: 80px !important;
            min-height: 80px !important;
          }
        }
      `}</style>
    </>
  );
}
