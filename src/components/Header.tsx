import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-black">
        <div className="flex items-center space-x-4 bg-transparent">
          <h1 className="text-xl font-bold text-secondary text-white">HMPPS Community Payback</h1>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div className="container govuk-phase-banner px-4 py-4">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          Prototype
        </strong>
        <span className="govuk-phase-banner__text">
          This is a Prototype service not yet ready for public use.
        </span>
      </p>
    </div>
    </header>;
};