
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  town: z.string().min(2, "Town must be at least 2 characters"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  source: z.string().min(2, "Please tell us how you heard about us"),
  difficulties: z.string().min(10, "Please provide more detail about your difficulties"),
  suggestions: z.string().min(10, "Please provide more detail about your suggestions"),
});

export function SurveyForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      town: "",
      zipCode: "",
      source: "",
      difficulties: "",
      suggestions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase.from("survey_responses").insert({
        town: values.town,
        zip_code: values.zipCode,
        source: values.source,
        difficulties: values.difficulties,
        suggestions: values.suggestions,
      });

      if (error) throw error;

      toast({
        title: "Survey submitted",
        description: "Thank you for sharing your thoughts with us!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your survey. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="town"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Town</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your town" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your ZIP code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <FormControl>
                <Input placeholder="Tell us how you found us" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="difficulties"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What difficulties are you experiencing?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share the challenges you're facing in your community"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="suggestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would you like to see A Better City do to help the Chicagoland area?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your suggestions for improving our community"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto">
          Submit Survey
        </Button>
      </form>
    </Form>
  );
}
