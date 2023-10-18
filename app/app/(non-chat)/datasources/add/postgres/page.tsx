"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {};

enum ConnectionType {
  CREDENTIALS = "CREDENTIALS",
  URL = "URL",
}

const credentialsFormSchema = z.object({
  host: z.string().url().ip(),
  port: z.number(),
  username: z.string(),
  password: z.string(),
  database: z.string(),
});

const urlFormSchema = z.object({
  url: z.string().url(),
});

const CredentialsForm = () => {
  const form = useForm<z.infer<typeof credentialsFormSchema>>({
    resolver: zodResolver(credentialsFormSchema),
  });
  function onSubmit(values: z.infer<typeof credentialsFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="host"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Host</FormLabel>
              <FormControl>
                <Input
                  placeholder="Connection Host (DNS or IP address) e.g. x.us-east-1.rds.amazon"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="database"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Database</FormLabel>
              <FormControl>
                <Input placeholder="Database" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="port"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Port</FormLabel>
              <FormControl>
                <Input placeholder="Port" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="px-6 mt-4 w-max">
          Connect
        </Button>
      </form>
    </Form>
  );
};

const UrlForm = () => {
  const form = useForm<z.infer<typeof urlFormSchema>>({
    resolver: zodResolver(urlFormSchema),
  });
  function onSubmit(values: z.infer<typeof urlFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="px-6 mt-4 w-max">
          Connect
        </Button>
      </form>
    </Form>
  );
};

const Page = (props: Props) => {
  const [connectionType, setConnectionType] = useState<ConnectionType>(
    ConnectionType.CREDENTIALS
  );

  return (
    <div className="space-y-10">
      <h1 className="font-bold text-5xl">Connect to Postgres</h1>
      <RadioGroup
        className="flex space-x-4"
        value={connectionType}
        onValueChange={(value) => setConnectionType(value as ConnectionType)}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={ConnectionType.CREDENTIALS}
            id={ConnectionType.CREDENTIALS}
            checked={connectionType === ConnectionType.CREDENTIALS}
          />
          <Label htmlFor="option-one" className="font-semibold text-base">
            Credentials
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value={ConnectionType.URL}
            id={ConnectionType.URL}
            checked={connectionType === ConnectionType.URL}
          />
          <Label htmlFor="option-two" className="font-semibold text-base">
            URL
          </Label>
        </div>
      </RadioGroup>
      <div className="w-[40%] min-w-[400px]">
        {connectionType === ConnectionType.CREDENTIALS && <CredentialsForm />}
        {connectionType === ConnectionType.URL && <UrlForm />}
      </div>
    </div>
  );
};

export default Page;
