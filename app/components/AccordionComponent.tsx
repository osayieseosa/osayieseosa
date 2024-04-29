
"use client";

import { Accordion } from "flowbite-react";

export default function AccordionComponent() {
  return (
    <div className="p-5">
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Next js</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Next.Js can be thought of as an opinionated way to write react by simplifying many best practices that would have taken more effort by plain react.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>React js</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          ReactJS is a JavaScript library used for building user interfaces, particularly for single-page applications where UI updates are dynamic and responsive. It enables developers to create reusable UI components, manage the state of an application efficiently, and efficiently update the user interface in response to data changes. React is commonly employed in web development to enhance the performance and structure of interface and complex user interfaces.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Node js</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code server-side. It is commonly used for building scalable network applications, particularly web servers. Node.js enables the development of fast and efficent server-side applications, making it well-suited for tasks like handling HTTP requests, building APIs, and creating real-time applications. Its event-driven, non-blocking I/O model contributes to high performance and scalability, making Node.js a popular choice for building modern, data-intensive applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Express js</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Expressjs is a web application framework for Node.js.It simplifies the process of building robust and scalable web application by providing a set of features and tools. Express.js is used for creating server-side applications, handling routing, managing middleware, and interacting with databases. It is widely employed in building RESTful APIs and serving dynamic web pages, making it a popular choice for backend development in Node.js applications.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>MongoDB</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          MongoDB is a NoSQL database that is used for storing and retrieving data in a flexible, JSON-like format. It's designed to handle large volumes of data, and it's document-oriented structure allows for easy scalability and quick development. MongoDB is often used in web applications, content management systems, and other scenarios where a dynamic and scalable database solution is needed.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    <div className="py-8 bg-gray-200 px-10 font-semibold text-gray-700 dark:bg-transparent dark:text-white">Other Technologies And Skills</div>
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>css and ui kits</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Tailwindcss, Daisyui,Sass
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Animation</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Framer Motion, react aos
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Api testing</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Postman, Thunder Client
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Design </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Figma, Dribble
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Skills</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
         JWT authentication, seo, web optimization, ui/ux desing
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  );
}

