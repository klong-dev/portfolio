import { Mail, Phone, MapPin, LinkIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";
import { saveAs } from "file-saver";
import resumePDF from "@/assets/Hoàng Kim Long - Resume.pdf";

export const Resume = () => {
  const handleDownload = () => {
    saveAs(resumePDF, "Hoàng Kim Long - Resume.pdf");
  };
  return (
    <>
      <div className="min-h-screen ">
        <div className="container mx-auto max-w-4xl px-8 py-8 bg-white dark:bg-gray-900 rounded-lg mt-8">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Hoàng Kim Long</h1>
              <p className="mt-2 text-xl text-muted-foreground">Software Engineer</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>0705 8787 81</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>longhk.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <LinkIcon className="h-4 w-4" />
                  <Button variant="link" className="h-auto p-0" asChild>
                    <a href="https://klong.dev">https://klong.dev</a>
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <LinkIcon className="h-4 w-4" />
                  <Button variant="link" className="h-auto p-0" asChild>
                    <a href="https://github.com/klong-dev">Github: github.com/klong-dev</a>
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Vinhomes Grand Park, Q9, HCM</span>
                </div>
                <Button className="text-white" onClick={handleDownload}>
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="mb-6 md:mb-0">
              <Avatar className="h-[224px] w-[224px] rounded-full shadow-md object-cover object-center ring-4 ring-blue-500 dark:ring-blue-400">
                <AvatarImage src={avatar} alt="Profile" />
                <AvatarFallback>HL</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Rest of the code remains unchanged */}
          <section className="mt-12">
            <h2 className="text-xl font-bold">About</h2>
            <p className="mt-4 text-muted-foreground">A student and aspiring Software Developer focusing on backend development with NestJS. I am passionate about learning web technologies and the JavaScript ecosystem. I specialize in backend development with NestJS and am continuously expanding my knowledge of modern web technologies.</p>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="mt-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">FPT University Ho Chi Minh City</h3>
                <span className="text-muted-foreground">Sep 2022 - Present</span>
              </div>
              <p className="text-muted-foreground">Software Engineering</p>
              <div className="mt-2">
                <p className="font-medium">Expected Graduation: Jan 2026</p>
                <p className="mt-2 font-medium">Relevant Courses:</p>
                <ul className="ml-6 list-disc text-muted-foreground">
                  <li>Object-Oriented Programming</li>
                  <li>Computer Networking</li>
                  <li>Data Structures and Algorithms</li>
                </ul>
                <p className="mt-2 font-medium">Skills Developed:</p>
                <ul className="ml-6 list-disc text-muted-foreground">
                  <li>Problem Analysis and Solving</li>
                  <li>Java Programming</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div className="mt-4 space-y-8">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Software Developer (Freelancer)</h3>
                  <span className="text-muted-foreground">Aug 2023 - Present</span>
                </div>
                <p className="mt-2 text-muted-foreground">Specializing in full-stack web development with focus on modern JavaScript frameworks. Developing scalable and responsive web applications. Implementing RESTful APIs and database integration.</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Web Developer (Freelancer)</h3>
                  <span className="text-muted-foreground">2022 - 2023</span>
                </div>
                <p className="mt-2 text-muted-foreground">Architecting and developing dynamic web applications. Building custom CMS solutions. Implementing front-end interfaces using VueJS.</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Application Developer (Freelancer)</h3>
                  <span className="text-muted-foreground">2020 - 2022</span>
                </div>
                <p className="mt-2 text-muted-foreground">Developed automated management tools for Ngoc Rong Online game. Designed and implemented desktop applications using .NET Framework. Created custom automation solutions and modification tools.</p>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold">FPT Mentor - Backend Developer</h3>
                <p className="mt-1 text-muted-foreground">An online mentoring platform for FPT students. VietComBank</p>
                <p className="mt-2 font-medium">Technologies Used:</p>
                <ul className="ml-6 list-disc text-muted-foreground">
                  <li>Database: MySQL, Cloud VPS</li>
                  <li>NodeJS (ExpressJS) REST API</li>
                  <li>Sequelize to connect with database</li>
                  <li>NodeMailer to send email to users</li>
                  <li>JWT</li>
                </ul>
                <Button variant="link" className="mt-2 h-auto p-0" asChild>
                  <a href="https://github.com/klong-dev/swp_group3_be">View on GitHub</a>
                </Button>
              </div>
              <div>
                <h3 className="font-semibold">VCB QR GENERATOR - Backend Developer</h3>
                <p className="mt-1 text-muted-foreground">An API service to create banking QR Code for VietComBank</p>
                <p className="mt-2 font-medium">Technologies Used:</p>
                <ul className="ml-6 list-disc text-muted-foreground">
                  <li>Database: MySQL</li>
                  <li>NestJS REST API</li>
                  <li>TypeORM to connect with database</li>
                  <li>QRCode module to generate QR Code</li>
                </ul>
                <Button variant="link" className="mt-2 h-auto p-0" asChild>
                  <a href="https://github.com/klong-dev/vcb-qr-generator">View on GitHub</a>
                </Button>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Back-End Skills</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>C/C++</li>
                  <li>C#, Winform, WPF</li>
                  <li>PHP</li>
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Front-End Skills</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>HTML, CSS</li>
                  <li>Javascript, TypeScript</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Certifications</h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span>Promote the Ethical Use of Data-Driven Technologies</span>
                <span className="text-muted-foreground">Oct 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Ethics of Artificial Intelligence</span>
                <span className="text-muted-foreground">Sep 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Java Database Connectivity Specialization</span>
                <span className="text-muted-foreground">July 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Object Oriented Programming in Java Specialization</span>
                <span className="text-muted-foreground">Jan 2024</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
