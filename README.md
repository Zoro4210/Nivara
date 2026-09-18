# NIVĀRA Developments

A cinematic, India-first real-estate portfolio built with Next.js, TypeScript and GSAP.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run build
npm audit --omit=dev
```

## Content model

The temporary brand configuration lives in `content/site-config.ts`. Project and journal content is served through `content/repository.ts`; replace that repository implementation when connecting a CMS.

The inquiry form is intentionally frontend-only. It validates fields and displays a local confirmation, but does not transmit or persist visitor data.

## Imagery

Generated concept imagery is stored in `public/images/generated`. Stock and conceptual image usage is documented in `content/asset-manifest.ts`. Replace illustrative assets with licensed, owned project photography before a real launch.

### Generated hero prompt

Original photorealistic Indian residential complex at bronze dusk, with rounded balconies, deep fins, tropical landscaping and negative space for oversized editorial typography. Generated with the built-in OpenAI image tool.

### Generated Goa villa prompt

Original photorealistic lime-plaster villa in Goa with teak frames, tropical garden and a reflective courtyard pool in restrained golden-hour light. Generated with the built-in OpenAI image tool.
