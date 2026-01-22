import React, { useState } from "react";
import { ComponentShowcase } from "../ui/component-showcase";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  X,
  Plus,
  ArrowRight,
  FileCode
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "../ui/badge";
import { FileUploader } from "../advanced/FileUploader";

function InvoiceUploadDemo() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("files");
  const [cufes, setCufes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCufeSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
        setCufes("");
      }, 2000);
    }, 1500);
  };

  const handleFileUpload = (files: File[]) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setOpen(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Carga Masiva</CardTitle>
            <CardDescription>
              Inicie el proceso de carga de facturas para factoring o confirming.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="upload-zone p-4 rounded-lg border border-dashed flex flex-col items-center justify-center h-48 gap-4 text-center">
              <div className="h-12 w-12 rounded-full upload-icon-bg flex items-center justify-center">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Subir nuevas facturas</p>
                <p className="text-sm text-muted-foreground">Soporta XML, PDF y códigos CUFE</p>
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Nueva Carga
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Cargar Facturas</DialogTitle>
                    <DialogDescription>
                      Seleccione el método de carga para sus documentos electrónicos.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="files" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Archivos
                      </TabsTrigger>
                      <TabsTrigger value="cufes" className="gap-2">
                        <FileCode className="h-4 w-4" />
                        Códigos CUFE
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="files" className="space-y-4">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Recomendación</AlertTitle>
                        <AlertDescription>
                          Suba los archivos XML para un procesamiento más rápido y preciso.
                        </AlertDescription>
                      </Alert>
                      
                      <FileUploader 
                        maxFiles={10} 
                        maxSize={10 * 1024 * 1024}
                        accept={["application/pdf", "text/xml", "application/xml"]}
                        onUpload={handleFileUpload}
                      />
                    </TabsContent>

                    <TabsContent value="cufes" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cufes">Ingrese los códigos CUFE / CUDE</Label>
                        <Textarea
                          id="cufes"
                          placeholder="Pegue aquí los códigos (uno por línea)..."
                          className="min-h-[200px] font-mono text-xs"
                          value={cufes}
                          onChange={(e) => setCufes(e.target.value)}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <DialogFooter>
                    {uploadStatus === "success" ? (
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Carga exitosa</span>
                      </div>
                    ) : (
                      <>
                        <Button variant="outline" onClick={() => setOpen(false)}>Cancelar</Button>
                        {activeTab === "cufes" && (
                          <Button 
                            onClick={handleCufeSubmit} 
                            disabled={!cufes.trim() || isProcessing}
                          >
                            {isProcessing ? "Procesando..." : "Cargar Códigos"}
                          </Button>
                        )}
                      </>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Últimas Cargas</CardTitle>
            <CardDescription>
              Historial reciente de facturas procesadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg border">
                  <div className="h-10 w-10 rounded-full icon-info-bg flex items-center justify-center">
                    <FileText className="h-5 w-5 icon-info" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-sm">Lote #{202400 + i}</p>
                    <p className="text-xs text-muted-foreground">
                      {i === 2 ? "CUFE Manual" : "Archivo XML"} • 15 documentos
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function InvoiceUploadPage() {
  return (
    <ComponentShowcase
      title="Carga de Facturas"
      description="Módulo unificado para la carga de facturas mediante archivos XML/PDF o ingreso manual de códigos CUFE/CUDE."
      badges={[
        { text: "Patterns", variant: "secondary" },
        { text: "New Feature", variant: "outline" }
      ]}
      previewComponent={<InvoiceUploadDemo />}
      codeBlock={`import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUploader } from "@/components/advanced/FileUploader";
import { Textarea } from "@/components/ui/textarea";

export function InvoiceUpload() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("files");
  const [cufes, setCufes] = useState("");

  const handleFileUpload = (files: File[]) => {
    console.log("Archivos cargados:", files);
    // Procesar archivos XML/PDF
  };

  const handleCufeSubmit = () => {
    const codes = cufes.split(/\\n|,/).filter(s => s.trim().length > 0);
    console.log("Códigos CUFE:", codes);
    // Validar y procesar códigos CUFE
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Nueva Carga</Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="files">Archivos</TabsTrigger>
            <TabsTrigger value="cufes">Códigos CUFE</TabsTrigger>
          </TabsList>

          <TabsContent value="files">
            <FileUploader 
              maxFiles={10}
              accept={["application/pdf", "text/xml"]}
              onUpload={handleFileUpload}
            />
          </TabsContent>

          <TabsContent value="cufes">
            <Textarea
              placeholder="Pegue códigos CUFE..."
              value={cufes}
              onChange={(e) => setCufes(e.target.value)}
            />
            <Button onClick={handleCufeSubmit}>
              Cargar Códigos
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}`}
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Carga por Archivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Soporta archivos XML y PDF con validación automática
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Carga por Códigos CUFE</h4>
                  <p className="text-sm text-muted-foreground">
                    Ingreso manual de códigos con validación en DIAN
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Procesamiento Masivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Hasta 10 documentos simultáneos por carga
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Historial de Cargas</h4>
                  <p className="text-sm text-muted-foreground">
                    Registro completo de todas las operaciones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}