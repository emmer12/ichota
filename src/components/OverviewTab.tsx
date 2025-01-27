import React from "react";
import { Button } from "./ui/button";

function OverviewTab({ onApply }: { onApply: () => void }) {
  return (
    <div>
      {" "}
      <div className="py-10 px-6 sm:px-0">
        <div className="mb-7">
          <h2 className="text-xl sm:text-2xl mb-4 font-bold ">About iChota</h2>
          <p className=" text-[#262840] font-base">
            iChota is a growing eCommerce platform designed to make shopping
            convenient, seamless, and accessible for our users. Built on
            Flutter, our app offers a user-friendly experience with cutting-edge
            technology integrations. We’re on the hunt for a talented Full Stack
            Developer to help us scale, improve functionality, and maintain a
            high-performing app across Android and iOS platforms.
          </p>
        </div>

        <div className="mb-7">
          <h2 className="text-lg sm:text-xl mb-4 font-bold ">Job Overview</h2>
          <p className=" text-[#262840] font-base">
            We are looking for a skilled Full Stack Developer with expertise in
            Flutter to join our team. You will be responsible for the
            development, deployment, and maintenance of our eCommerce app,
            ensuring it runs smoothly across all devices. Additionally, you’ll
            work closely with the product team to implement new features,
            optimize app performance, and integrate third-party services.
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Key Responsibilities
          </h2>

          <ul className="list-disc pl-5  text-[#262840] font-base">
            <li>
              Develop, test, and maintain the iChota eCommerce app using Flutter
              for both Android and iOS platforms.
            </li>
            <li>
              Collaborate with the product team to design and implement new
              features and enhancements.
            </li>
            <li>
              Integrate third-party services and APIs such as Twilio,
              Sendinblue, Branch.io, and Google Ads for in-app communication,
              marketing, and analytics.
            </li>
            <li>
              Manage app deployments on Google Play Console and Apple Developer
              platforms, including updates, versioning, and troubleshooting.
            </li>
            <li>
              Work with Firebase for authentication, database management, cloud
              functions, and app analytics.
            </li>
            <li>
              Implement secure and scalable backend solutions to support
              front-end features.
            </li>
            <li>
              Ensure the app meets performance, quality, and responsiveness
              standards.
            </li>
            <li>
              Troubleshoot and debug application issues, ensuring timely
              resolutions.
            </li>
            <li>
              Stay up-to-date with industry trends, emerging technologies, and
              best practices in mobile development and eCommerce.
            </li>
          </ul>
        </div>
        <div className="mb-7">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Required Skills &amp; Qualifications
          </h2>
          <ul className="list-disc pl-5  text-[#262840] font-base">
            <li>
              Proficiency in Flutter with a minimum of 3+ years of experience
              building and deploying mobile applications for Android and iOS.
            </li>
            <li>
              Strong experience with Firebase services, including Firestore,
              Authentication, Cloud Functions, and Analytics.
            </li>
            <li>
              Experience managing app releases on Google Play Console and Apple
              Developer platforms.
            </li>
            <li>
              Experience integrating third-party APIs and SDKs such as Twilio
              (SMS, Voice), Branch.io (Deep Linking), and Sendinblue (Email &
              SMS campaigns).
            </li>
            <li>Strong understanding of RESTful APIs and backend services.</li>
            <li>
              Familiarity with managing mobile app permissions, notifications,
              and in-app purchases.
            </li>
            <li>
              Knowledge of Google Ads integration and tracking for in-app
              analytics and marketing.
            </li>
            <li>Familiarity with version control systems like Git.</li>
            <li>Experience working in Agile/Scrum development environments.</li>
            <li>
              Strong problem-solving skills, attention to detail, and ability to
              work independently or in a team.
            </li>
          </ul>
        </div>
        <div className="mb-7">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Preferred Qualifications
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experience working in Agile/Scrum development environments.</li>
            <li>
              Strong problem-solving skills, attention to detail, and ability to
              work independently or in a team.
            </li>
            <li>
              Experience with other backend frameworks such as Node.js or
              Django.
            </li>
            <li>Knowledge of mobile app security best practices.</li>
            <li>
              Familiarity with cloud services like Google Cloud Platform (GCP)
              or AWS.
            </li>
            <li>
              Experience optimizing app performance for various devices and
              network conditions.
            </li>
            <li>
              UI/UX design experience or a good understanding of user-centered
              design principles.
            </li>
          </ul>
        </div>
        <div className="mb-7">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Competitive salary and performance-based incentives.</li>
            <li>Remote work environment.</li>
            <li>
              Opportunities for career growth and professional development.
            </li>
            <li>Collaborative and innovative team culture.</li>
            <li>Access to industry-leading tools and technologies.</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <Button
          onClick={onApply}
          variant={"default"}
          size={"lg"}
          className="rounded-full"
        >
          APPLY
        </Button>
      </div>
    </div>
  );
}

export default OverviewTab;
