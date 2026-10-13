import React from "react";
import Button from "../components/ui/button/Button";

const ButtonPlayground = () => {
  const handleClick = (label) => {
    console.log(`${label} button clicked`);
  };

  return (
    <main className="min-h-screen space-y-10 bg-gray-50 p-8 text-gray-900">
      <header>
        <h1 className="text-3xl font-bold">Button Playground</h1>
        <p className="mt-2 text-gray-500">
          Validate variants, sizes, states, and native props.
        </p>
      </header>

      {/* 1. Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => handleClick("Primary")}>
            Primary
          </Button>

          <Button variant="secondary" onClick={() => handleClick("Secondary")}>
            Secondary
          </Button>

          <Button variant="ghost" onClick={() => handleClick("Ghost")}>
            Ghost
          </Button>

          <Button variant="danger" onClick={() => handleClick("Danger")}>
            Delete
          </Button>

          <Button variant="outlined" onClick={() => handleClick("Outlined")}>
            Outlined
          </Button>
        </div>
      </section>

      {/* 2. Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* 3. Loading and disabled */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. States</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>Saving...</Button>
          <Button disabled>Disabled</Button>
          <Button variant="danger" disabled>
            Disabled Delete
          </Button>
          <Button variant="outlined" loading>
            Loading
          </Button>
        </div>
      </section>

      {/* 4. Combined variants and sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Combined Variants + Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="xs">
            Primary XS
          </Button>
          <Button variant="secondary" size="sm">
            Secondary SM
          </Button>
          <Button variant="danger" size="md">
            Danger MD
          </Button>
          <Button variant="outlined" size="lg">
            Outlined LG
          </Button>
        </div>
      </section>

      {/* 5. Native props */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Native Props</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            name="demo-action"
            data-testid="demo-button"
            onClick={() => handleClick("Native props")}
          >
            Click Me
          </Button>

          <Button
            aria-label="Delete this item"
            variant="danger"
            onClick={() => handleClick("Accessible delete")}
          >
            Accessible Delete
          </Button>
        </div>
      </section>

      {/* 6. Form behavior */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Form Behavior</h2>

        <form
          className="flex flex-wrap items-center gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
          }}
        >
          <Button type="submit">Submit Form</Button>
          <Button type="reset" variant="secondary">
            Reset Form
          </Button>
          <Button type="button" variant="ghost">
            Normal Button
          </Button>
        </form>
      </section>

      {/* 7. Fallback behavior */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Fallback Behavior</h2>
        <p className="text-sm text-gray-500">
          These deliberately invalid values should fall back to primary and md.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="unknown">Invalid Variant</Button>
          <Button size="unknown">Invalid Size</Button>
        </div>
      </section>
    </main>
  );
};

export default ButtonPlayground;
