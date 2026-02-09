import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Table } from "@/components/table/table";

afterEach(cleanup);

describe("Table", () => {
  it("renders table content", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(screen.getByText("Name")).toBeDefined();
    expect(screen.getByText("Alice")).toBeDefined();
  });

  it("has data-slot on table", () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>x</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    expect(document.querySelector("[data-slot=table]")).toBeDefined();
  });
});
