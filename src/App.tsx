// src/App.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ItemCard } from "@/components/ItemCard";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import {
  NAME,
  DESCRIPTION,
  LINKS,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION,
} from "@/data";

function App() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-8 space-y-8">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{NAME}</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {DESCRIPTION}
          </p>

          <div className="flex flex-wrap gap-2 text-sm">
            {LINKS.map((link) => (
              <Button key={link.label} variant={link.external ? "outline" : "default"} asChild>
                <a
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noreferrer" })}
                >
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </section>

        <Separator />

        {EXPERIENCE.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="space-y-3">
              {EXPERIENCE.map((exp) => (
                <ItemCard
                  key={exp.role + exp.company}
                  title={exp.role}
                  subtitle={exp.company}
                  delimiter="@"
                  description={exp.location}
                  metadata={`${exp.period.from} \u2013 ${exp.period.to}`}
                  bullets={exp.bullets}
                />
              ))}
            </div>
          </section>
        )}

        {PROJECTS.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            {PROJECTS.map((project) => (
              <ItemCard
                key={project.name}
                title={project.name}
                description={project.description}
                tags={project.tech}
                bullets={project.bullets}
                actions={[
                  ...(project.code ? [{ label: "Code", href: project.code }] : []),
                  ...(project.demo ? [{ label: "Live demo", href: project.demo }] : []),
                ]}
              />
            ))}
          </section>
        )}

        {SKILLS.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Skills</h2>
            <Card>
              <CardContent className="space-y-2 text-sm">
                {SKILLS.map((group) => (
                  <div key={group.label}>
                    <span className="font-medium">{group.label}: </span>
                    <span className="text-muted-foreground">
                      {group.items.join(", ")}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        )}

        {EDUCATION.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <ItemCard
                  key={edu.degree + edu.institution}
                  title={edu.degree}
                  subtitle={edu.institution}
                  delimiter="@"
                  metadata={`${edu.period.from} \u2013 ${edu.period.to}`}
                />
              ))}
            </div>
          </section>
        )}

        <Separator />

        <footer className="py-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;
