import type { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ItemCardProps {
  title: string;
  subtitle?: string;
  delimiter?: string;
  description?: string;
  metadata?: string;
  bullets?: string[];
  tags?: string[];
  actions?: Array<{
    label: string;
    href: string;
  }>;
  children?: ReactNode;
}

export function ItemCard({
  title,
  subtitle,
  description,
  metadata,
  bullets,
  tags,
  actions,
  children,
  delimiter = "",
}: ItemCardProps) {
  const prefix = delimiter ? ` ${delimiter} ` : "";
  const hasBody = (tags && tags.length > 0) || (bullets && bullets.length > 0) || actions || children;

  return (
    <Card className={actions ? "flex flex-col" : ""}>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle className="text-sm">
              {title}
              {subtitle && (
                <span className="text-muted-foreground">{prefix}{subtitle}</span>
              )}
            </CardTitle>
            {description && (
              <CardDescription className="text-xs">
                {description}
              </CardDescription>
            )}
          </div>
          {metadata && (
            <p className="text-xs text-muted-foreground">{metadata}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className={`${hasBody ? "mt-3" : ""} ${actions ? "flex flex-1 flex-col gap-2" : ""}`}>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {actions && actions.length > 0 && (
          <div className={`flex flex-wrap gap-2 text-xs ${bullets ? "mt-auto" : ""}`}>
            {actions.map((action) => (
              <Button key={action.label} size="sm" variant="outline" asChild>
                <a href={action.href} target="_blank" rel="noreferrer">
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
