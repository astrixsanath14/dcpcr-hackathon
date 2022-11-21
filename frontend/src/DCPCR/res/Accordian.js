import React from "react";
import Collapsible from "react-collapsible";
import { Space, IconPrimary } from "dnb-ui-lib/components";
import { makeUniqueId } from "dnb-ui-lib/shared/component-helper";
import styled from "@emotion/styled";

export default function Accordion({
  top,
  right,
  bottom,
  left,
  open,
  children,
  trigger,
  ...leftover
}) {
  const [isVisible, setVisibility] = React.useState(Boolean(open));
  const [randomId] = React.useState(makeUniqueId());
  return (
    <StyledCollapsible
      className={isVisible ? "is-visible" : null}
      {...{ top, right, bottom, left }}
    >
      <Collapsible
        trigger={[
          <span
            role="button"
            aria-expanded={isVisible}
            aria-controls={randomId}
          >
            {trigger}
          </span>
        ]
          // , <IconPrimary icon="chevron-down" aria-hidden />]
        }
        overflowWhenOpen="visible" // to make sure our popup can be shown outside of the box
        tabIndex={0} // make sure we can focus this!
        triggerSibling={() => <IconPrimary icon="chevron-down" aria-hidden />}
        onOpening={() => setVisibility(true)}
        onClose={() => setVisibility(false)}
        open={open}
        {...leftover}
      >
        {/* set id attribute because the trigger button uses "aria-controls" */}
        <div id={randomId}>{children}</div>
      </Collapsible>
    </StyledCollapsible>
  );
}

const StyledCollapsible = styled(Space)`
  .Collapsible {
    position: relative;
  }

  /* Handle display none, to proplery hide not visible content, else the content will be accessible by tab key / screen readers */
  .Collapsible__contentOuter {
    display: none;
  }
  &.is-visible .Collapsible__contentOuter {
    display: block;
  }

  /* The link which when clicked opens the collapsable area */
  .Collapsible__trigger {
    cursor: pointer;

    position: relative;
    display: block;

    height: 4rem;
    line-height: 4rem;
    padding-left: 3rem;

    background-color: var(--color-mint-green-12); /* UX/Mintgreen 12% */
    color: var(--color-emerald-green); /* Profil/Emeraldgreen */

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 0.0625rem;

      background-color: var(--color-mint-green); /* Profil/Mintgreen */
    }

    &:focus {
      outline: none;
    }

    html[data-whatinput="keyboard"] &:not(.is-disabled):focus {
      box-shadow: inset 0 0 0 0.125rem var(--color-emerald-green); /* emerald-green */

      &::after {
        content: none;
      }
    }
    &:not(.is-disabled):hover {
      background-color: var(--color-mint-green); /* Profil/Mintgreen */
    }
    &:not(.is-disabled):active {
      font-weight: 500; /* var(--font-weight-medium) */
    }
    &.is-open {
      font-weight: 500; /* var(--font-weight-medium) */
      background-color: var(--color-mint-green); /* Profil/Mintgreen */
    }
    &.is-disabled {
      opacity: 0.5;
      background-color: grey;
    }
  }
  .Collapsible__trigger + .dnb-icon {
    position: absolute;
    left: 1rem;
    top: 1.5rem;
    transition: transform 300ms;
  }
  .Collapsible__trigger.is-open + .dnb-icon {
    transform: rotateZ(180deg);
  }
`;
