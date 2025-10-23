"use client";
import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { LIST_CONTACT_US } from "@constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, poppins } from "@utils";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapSection } from "./_modules/map-section";
import styles from "./contact-page.module.scss";

const ContactPage = () => {
  const formSchema = z.object({
    fullname: z.string().min(4, {
      message: "Fullname must be at least 4 characters.",
    }),
    email: z.string().email({
      message: "Please fill the email correct",
    }),
    message: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const formSection = () => {
    const onSubmit = () => {};
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.form_section}
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>FULL NAME</FormLabel>
                <FormControl>
                  <Input placeholder="Your fullname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EMAIL ADDRESS</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>MESSAGE</FormLabel>
                <FormControl>
                  <Textarea
                    className="!min-h-[140px]"
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="dark:!bg-neutral_03" type="submit">
            Send message
          </Button>
        </form>
      </Form>
    );
  };

  return (
    <section className={cn(styles.contactPage, "media_width_sm")}>
      <h1 className={poppins.className}>
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>
      <p>
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>
      <div className={styles.about_us_section}>
        <Image
          alt="Image of sofas"
          sizes="(50%)"
          fill
          src="https://ucarecdn.com/69358f7c-7e08-47b9-908e-e27b249f2be8/ImagePlaceholder3.png"
        />
        <div className="about_us_content">
          <h3 className={poppins.className}>About Us</h3>
          <p>
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>
          <Button>Shop now</Button>
        </div>
      </div>
      <div className={styles.contact_us_section}>
        <h2 className={poppins.className}>Contact Us</h2>
        <div>
          {LIST_CONTACT_US.map((item) => (
            <div key={item.id}>
              <item.Icon />
              <span>{item.title}</span>
              <b>{item.content}</b>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.form_map_section}>
        {formSection()}
        <MapSection />
      </div>
    </section>
  );
};
export default ContactPage;
